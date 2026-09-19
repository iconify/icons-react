import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu5b3g62n.css';
import '../../css/l/lkpw8_1oe.css';
import '../../css/h/h2dm1dbhq.css';
import '../../css/i/inyn20bez.css';
import '../../css/o/o9hbr2ndk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu5b3g62n"/><path class="lkpw8_1oe"/><path class="h2dm1dbhq"/><path class="inyn20bez"/><path class="o9hbr2ndk"/>`,
		"fallback": "fxemoji:twistedrightwardsarrows",
	});
}

export default Component;
