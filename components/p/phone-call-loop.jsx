import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/u/uudn8a.css';
import '../../css/g/g9kl8y.css';
import '../../css/p/pprfug.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/s/so-ohjegy.css';
import '../../css/s/so-88gdib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c uudn8a"/><path class="a0m25c g9kl8y"/><path class="a0m25c pprfug"/>`,
		"fallback": "line-md:phone-call-loop",
	});
}

export default Component;
