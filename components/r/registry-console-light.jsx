import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd-nkug3f.css';
import '../../css/s/s2cll7bjb.css';
import '../../css/g/ge8lssbqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd-nkug3f"/><path class="s2cll7bjb"/><path class="ge8lssbqq"/>`,
		"fallback": "selfhst:registry-console-light",
	});
}

export default Component;
