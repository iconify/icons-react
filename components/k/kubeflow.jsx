import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bose8-bou.css';
import '../../css/e/er-gjfemd.css';
import '../../css/y/yh97xd9ai.css';
import '../../css/z/zwbzsgbuk.css';
import '../../css/d/drcv5vb1v.css';
import '../../css/a/a3sbb9bcg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bose8-bou"/><path class="er-gjfemd"/><path class="yh97xd9ai"/><path class="zwbzsgbuk"/><path class="drcv5vb1v"/><path class="a3sbb9bcg"/>`,
		"fallback": "devicon:kubeflow",
	});
}

export default Component;
