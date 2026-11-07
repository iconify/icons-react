import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gycevabte.css';
import '../../css/w/wo44ytbsn.css';
import '../../css/o/o4befubdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="gycevabte"/><path class="wo44ytbsn"/></g><path class="o4befubdi"/>`,
		"fallback": "solar:scooter-bold-duotone",
	});
}

export default Component;
