import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es01b9v3e.css';
import '../../css/e/eqsgj0zkv.css';
import '../../css/m/mz31awbam.css';
import '../../css/p/pvx_7mjiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es01b9v3e"/><path class="eqsgj0zkv"/><path class="mz31awbam"/><path class="pvx_7mjiy"/>`,
		"fallback": "withicons-bauhaus:sofa",
	});
}

export default Component;
