import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8-9l3bmt.css';
import '../../css/o/odnwqioen.css';
import '../../css/p/pugw0bc5m.css';
import '../../css/q/q6zzqeswq.css';
import '../../css/u/u8ulsoosf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8-9l3bmt"/><path class="odnwqioen"/><path class="pugw0bc5m"/><path class="q6zzqeswq"/><path class="u8ulsoosf"/>`,
		"fallback": "streamline-pixel:romance-love-letter-open",
	});
}

export default Component;
