import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umeadtqbg.css';
import '../../css/n/nar-b643b.css';
import '../../css/t/ttoow2blg.css';
import '../../css/g/ghryhmbne.css';
import '../../css/n/n8zv8bcet.css';
import '../../css/x/xfx0l9blj.css';
import '../../css/l/lmg5a1b-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umeadtqbg"/><path class="nar-b643b"/><path class="ttoow2blg"/><path class="ghryhmbne"/><path class="n8zv8bcet"/><path class="xfx0l9blj"/><path class="lmg5a1b-f"/>`,
		"fallback": "ion:ios-partly-sunny",
	});
}

export default Component;
