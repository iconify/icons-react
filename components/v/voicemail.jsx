import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wt6ddqrsu.css';
import '../../css/y/yj8rovbyf.css';
import '../../css/v/vxg4v5b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="wt6ddqrsu"/><circle class="yj8rovbyf"/><path class="vxg4v5b-i"/></g>`,
		"fallback": "hugeicons:voicemail",
	});
}

export default Component;
