import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi_7smg8p.css';
import '../../css/z/za0y9kbbq.css';
import '../../css/b/bmqmgbbve.css';
import '../../css/w/w_wojc56u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi_7smg8p wm-k"/><path class="wm-a za0y9kbbq"/><path class="bmqmgbbve wm-a"/><path class="w_wojc56u wm-a"/>`,
		"fallback": "withicons-bauhaus:speaker",
	});
}

export default Component;
