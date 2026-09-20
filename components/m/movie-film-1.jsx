import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/p/pdjk5bbhf.css';
import '../../css/n/nx--r9aiw.css';
import '../../css/d/ddgglvb7y.css';
import '../../css/u/u32la56ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="pdjk5bbhf"/><path class="nx--r9aiw"/><path class="ddgglvb7y"/><path class="u32la56ww"/></g>`,
		"fallback": "streamline-cyber:movie-film-1",
	});
}

export default Component;
