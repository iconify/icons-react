import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/i/i85webbwe.css';
import '../../css/m/mwyz_7xrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="i85webbwe"/><path class="mwyz_7xrj"/></g>`,
		"fallback": "streamline-cyber:music-album-1",
	});
}

export default Component;
