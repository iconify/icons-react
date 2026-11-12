import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oibvcjc0f.css';
import '../../css/i/iu86r2nel.css';
import '../../css/l/livslo2ye.css';
import '../../css/k/kt6qteb_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oibvcjc0f"/><path class="iu86r2nel"/><path class="livslo2ye"/><path class="kt6qteb_y"/>`,
		"fallback": "selfhst:tiny-tiny-rss-dark",
	});
}

export default Component;
