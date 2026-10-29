import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shzi5lk7v.css';
import '../../css/z/zkinl8z7h.css';
import '../../css/p/pphg3627g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shzi5lk7v wm-k"/><path class="wm-a zkinl8z7h"/><path class="pphg3627g wm-a"/>`,
		"fallback": "withicons-bauhaus:warehouse",
	});
}

export default Component;
