import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgvb2s.css';
import '../../css/y/ydovum.css';
import '../../css/k/kqeuxs.css';
import '../../css/u/unuj2t.css';
import '../../css/i/if5-bf.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-52.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgvb2s ydovum"/><circle class="kqeuxs unuj2t ydovum"/><circle class="if5-bf kqeuxs ydovum"/>`,
		"fallback": "line-md:pizza-twotone",
	});
}

export default Component;
