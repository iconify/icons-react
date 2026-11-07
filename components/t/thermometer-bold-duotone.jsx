import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhbb46vhn.css';
import '../../css/m/m_kry2xln.css';
import '../../css/m/m41j1im6l.css';
import '../../css/v/vh0iqwbmx.css';
import '../../css/h/hcbdb2o-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhbb46vhn"/><path class="m_kry2xln"/><path class="m41j1im6l"/><path class="vh0iqwbmx"/><path class="hcbdb2o-n"/>`,
		"fallback": "solar:thermometer-bold-duotone",
	});
}

export default Component;
