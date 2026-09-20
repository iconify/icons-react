import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epvjv999q.css';
import '../../css/s/s3o1n7b3h.css';
import '../../css/z/zzp02ebzm.css';
import '../../css/i/iulsg4y1u.css';
import '../../css/m/mgrq1f6gp.css';
import '../../css/f/fkevdpbng.css';
import '../../css/a/aueiftbzw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epvjv999q"/><path class="s3o1n7b3h"/><ellipse class="zzp02ebzm"/><ellipse class="iulsg4y1u"/><path class="mgrq1f6gp"/><path class="fkevdpbng"/><path class="aueiftbzw"/>`,
		"fallback": "openmoji:pile-of-poo",
	});
}

export default Component;
