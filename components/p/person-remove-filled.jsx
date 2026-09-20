import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/v/v-mv1g.css';
import '../../css/y/ydovum.css';
import '../../css/o/omd_kv.css';
import '../../css/c/c27iog.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew v-mv1g ydovum"/><path class="iw1iew omd_kv ydovum"/><path class="c27iog iw1iew"/>`,
		"fallback": "line-md:person-remove-filled",
	});
}

export default Component;
