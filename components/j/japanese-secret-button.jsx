import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjj2b5bim.css';
import '../../css/t/tyj2zvbgx.css';
import '../../css/i/iirkzlxnz.css';
import '../../css/k/kr7ez6bdi.css';
import '../../css/r/rcvmx9bec.css';
import '../../css/b/bt9a0sbqr.css';
import '../../css/d/d6embpb-a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="cjj2b5bim"><path class="tyj2zvbgx"/><path class="iirkzlxnz"/></g><g transform="translate(-521.6 -12.27)scale(.3004)"><circle transform="translate(1140 -554.4)scale(.8665)" class="kr7ez6bdi"/><path class="rcvmx9bec"/><path class="bt9a0sbqr"/></g><circle transform="translate(-179 -178.8)scale(.2603)" class="d6embpb-a"/>`,
		"fallback": "openmoji:japanese-secret-button",
	});
}

export default Component;
