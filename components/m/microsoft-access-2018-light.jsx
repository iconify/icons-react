import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opnfa-u8z.css';
import '../../css/n/n80hob-xf.css';
import '../../css/z/zx64x75sx.css';
import '../../css/z/zv8n_eywr.css';
import '../../css/k/k978evhme.css';
import '../../css/t/tt5d1s3ih.css';
import '../../css/m/mrk8m9bnt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="opnfa-u8z"/><path class="n80hob-xf"/><path class="zx64x75sx"/><path class="zv8n_eywr"/><path class="k978evhme"/><path class="tt5d1s3ih"/><path class="mrk8m9bnt"/>`,
		"fallback": "selfhst:microsoft-access-2018-light",
	});
}

export default Component;
