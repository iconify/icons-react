import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk074xkan.css';
import '../../css/z/zjr6jubdu.css';
import '../../css/g/g_412ygpx.css';
import '../../css/l/l1zmjqb9d.css';
import '../../css/m/mlhzcfy5k.css';

const viewBox = {"width":100,"height":69};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk074xkan"/><path class="zjr6jubdu"/><path class="g_412ygpx"/><path class="l1zmjqb9d"/><path class="mlhzcfy5k"/>`,
		"fallback": "flat-ui:pc",
	});
}

export default Component;
