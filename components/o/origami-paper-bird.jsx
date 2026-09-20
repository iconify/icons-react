import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/f/fiiqsdbfa.css';
import '../../css/i/int-x4loh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="fiiqsdbfa"/><path class="int-x4loh"/></g>`,
		"fallback": "streamline-cyber:origami-paper-bird",
	});
}

export default Component;
