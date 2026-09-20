import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df-x2abzf.css';
import '../../css/w/w9_pfn2dg.css';
import '../../css/o/or0gw7e0r.css';
import '../../css/v/vps6yzbcz.css';
import '../../css/c/crrd1v_ru.css';
import '../../css/h/hoip12bez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df-x2abzf"/><path class="w9_pfn2dg"/><path class="or0gw7e0r"/><path class="vps6yzbcz"/><path class="crrd1v_ru"/><path class="hoip12bez"/>`,
		"fallback": "selfhst:sonarr-4k-light",
	});
}

export default Component;
