import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfwn5dffv.css';
import '../../css/m/muqokkksd.css';
import '../../css/v/vydu3dknt.css';
import '../../css/k/kut4grbpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfwn5dffv"/><path class="muqokkksd"/><path class="vydu3dknt"/><path class="kut4grbpb"/>`,
		"fallback": "selfhst:nodemailer-dark",
	});
}

export default Component;
