import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djeqznbam.css';
import '../../css/h/h9taerbyy.css';
import '../../css/c/cgk6y35ea.css';
import '../../css/s/s3sc_vedu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djeqznbam"/><path class="h9taerbyy"/><path class="cgk6y35ea"/><path class="s3sc_vedu"/>`,
		"fallback": "energy-icons:usb-20",
	});
}

export default Component;
