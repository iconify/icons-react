import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml08hox5q.css';
import '../../css/t/tne5oowir.css';
import '../../css/z/zed7i37pe.css';
import '../../css/r/r8wqxntin.css';
import '../../css/h/h_ki4obna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml08hox5q wm-shadow"/><path class="tne5oowir wm-k"/><path class="wm-k zed7i37pe"/><path class="r8wqxntin wm-a"/><path class="h_ki4obna wm-a"/>`,
		"fallback": "withicons-pastel:underline",
	});
}

export default Component;
