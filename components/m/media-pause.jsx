import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqxr509tf.css';
import '../../css/s/soiwzo-nm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="dqxr509tf"/><rect class="soiwzo-nm"/></g>`,
		"fallback": "charm:media-pause",
	});
}

export default Component;
