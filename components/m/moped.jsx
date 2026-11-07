import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eqvpqq9mt.css';
import '../../css/t/tlf4c5n3t.css';
import '../../css/z/z_26mrcru.css';
import '../../css/e/em3y75frz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eqvpqq9mt"/><path class="tlf4c5n3t"/><circle class="z_26mrcru"/><circle class="em3y75frz"/></g>`,
		"fallback": "lucide:moped",
	});
}

export default Component;
