import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cycwnxbny.css';
import '../../css/q/qzjyatb0i.css';
import '../../css/m/m4uhq0bmb.css';
import '../../css/p/px7fr0tbo.css';
import '../../css/h/h66nu-x9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cycwnxbny"/><path class="qzjyatb0i"/><path class="m4uhq0bmb"/><path class="px7fr0tbo"/><path class="h66nu-x9t"/>`,
		"fallback": "energy-icons:mc4-connector-20-bold",
	});
}

export default Component;
