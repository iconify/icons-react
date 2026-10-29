import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xooobjbjy.css';
import '../../css/i/i2s3-g1xm.css';
import '../../css/s/sxuvjhbsh.css';
import '../../css/g/gybz7ebzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xooobjbjy"/><path class="i2s3-g1xm"/><path class="sxuvjhbsh"/><path class="gybz7ebzj"/></g>`,
		"fallback": "withicons:sofa-duo",
	});
}

export default Component;
