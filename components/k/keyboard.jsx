import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2qtvgb0p.css';
import '../../css/z/z4jbslb2h.css';
import '../../css/l/lkt-2en5c.css';
import '../../css/g/g028rpyqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2qtvgb0p wm-k"/><path class="wm-a z4jbslb2h"/><path class="lkt-2en5c wm-a"/><path class="g028rpyqs wm-a"/>`,
		"fallback": "withicons-bauhaus:keyboard",
	});
}

export default Component;
