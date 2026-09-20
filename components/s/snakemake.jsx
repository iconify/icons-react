import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai6onkxos.css';
import '../../css/p/puojo9i0c.css';
import '../../css/w/wd2296cyy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai6onkxos"/><path class="puojo9i0c"/><path class="wd2296cyy"/>`,
		"fallback": "material-icon-theme:snakemake",
	});
}

export default Component;
