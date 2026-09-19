import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udl05cesy.css';
import '../../css/r/r2agu4stc.css';
import '../../css/d/dmah2_beo.css';
import '../../css/f/fprc9_bni.css';
import '../../css/v/vthft9fin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udl05cesy"/><path class="r2agu4stc"/><path class="dmah2_beo"/><path class="fprc9_bni"/><path class="vthft9fin"/>`,
		"fallback": "ion:md-rainy",
	});
}

export default Component;
