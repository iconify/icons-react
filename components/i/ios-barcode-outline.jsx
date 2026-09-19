import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzjm_3bmj.css';
import '../../css/v/vun6ubbjw.css';
import '../../css/e/eyqpwsbyt.css';
import '../../css/o/o12pcgbwf.css';
import '../../css/i/i-07h4bkh.css';
import '../../css/i/i-ke3gyiz.css';
import '../../css/w/wqstgm7-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzjm_3bmj"/><path class="vun6ubbjw"/><path class="eyqpwsbyt"/><path class="o12pcgbwf"/><path class="i-07h4bkh"/><path class="i-ke3gyiz"/><path class="wqstgm7-t"/>`,
		"fallback": "ion:ios-barcode-outline",
	});
}

export default Component;
