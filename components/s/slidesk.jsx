import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt3ooeb1p.css';
import '../../css/y/y66p4r9gc.css';
import '../../css/u/ujatxybje.css';
import '../../css/a/ashn9cb5e.css';
import '../../css/y/ym0_asezx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="gt3ooeb1p"/><ellipse class="y66p4r9gc"/><path class="ujatxybje"/><path class="ashn9cb5e"/><path class="ym0_asezx"/>`,
		"fallback": "catppuccin:slidesk",
	});
}

export default Component;
