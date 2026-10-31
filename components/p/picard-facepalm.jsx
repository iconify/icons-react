import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gfgcf57lr.css';
import '../../css/a/atf-1hfvj.css';
import '../../css/k/kzn0lcbxv.css';
import '../../css/m/mek8yvpra.css';
import '../../css/g/gp0v6yazo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="gfgcf57lr"/><path class="atf-1hfvj"/><path class="kzn0lcbxv"/><path class="mek8yvpra"/><path class="gp0v6yazo"/></g>`,
		"fallback": "streamline-memes:picard-facepalm",
	});
}

export default Component;
