import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyolmzewg.css';
import '../../css/p/pl82gjb6q.css';
import '../../css/s/s3d6a-b2t.css';
import '../../css/r/rnsb_0bsv.css';
import '../../css/s/sn6suds-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kyolmzewg"/><path class="pl82gjb6q"/><path class="s3d6a-b2t"/><path class="rnsb_0bsv"/><path class="sn6suds-h"/>`,
		"fallback": "streamline-freehand:programming-user-head-matrix",
	});
}

export default Component;
