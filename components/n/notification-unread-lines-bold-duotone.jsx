import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv4wotbsh.css';
import '../../css/g/g1b-v8rmi.css';
import '../../css/t/tmzilmxfy.css';
import '../../css/s/siai_tb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv4wotbsh"/><path class="g1b-v8rmi"/><path class="tmzilmxfy"/><path class="siai_tb_r"/>`,
		"fallback": "solar:notification-unread-lines-bold-duotone",
	});
}

export default Component;
