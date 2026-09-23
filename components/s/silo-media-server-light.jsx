import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cym2lacyw.css';
import '../../css/g/gemcfhb7v.css';
import '../../css/q/qjf38o8dr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cym2lacyw"/><path class="gemcfhb7v"/><path class="qjf38o8dr"/>`,
		"fallback": "selfhst:silo-media-server-light",
	});
}

export default Component;
