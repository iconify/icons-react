import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gusc8fh9m.css';
import '../../css/p/pzzrm0a9w.css';
import '../../css/r/rvi4blbjl.css';
import '../../css/i/inwbjmbwl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gusc8fh9m"/><path class="pzzrm0a9w"/><path class="rvi4blbjl"/><path class="inwbjmbwl"/>`,
		"fallback": "ant-design:wallet-twotone",
	});
}

export default Component;
