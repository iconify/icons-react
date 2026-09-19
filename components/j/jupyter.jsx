import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvr969ois.css';
import '../../css/w/wuqa13gqk.css';
import '../../css/w/wsyyf2bqs.css';
import '../../css/q/qw_fs9bys.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvr969ois"/><path class="wuqa13gqk"/><path class="wsyyf2bqs"/><path class="qw_fs9bys"/>`,
		"fallback": "devicon:jupyter",
	});
}

export default Component;
