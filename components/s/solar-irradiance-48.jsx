import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyp8s5b_x.css';
import '../../css/i/im7csbc2a.css';
import '../../css/z/zqzklisui.css';
import '../../css/p/pkj7clbju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyp8s5b_x"/><path class="im7csbc2a"/><path class="zqzklisui"/><path class="pkj7clbju"/>`,
		"fallback": "energy-icons:solar-irradiance-48",
	});
}

export default Component;
