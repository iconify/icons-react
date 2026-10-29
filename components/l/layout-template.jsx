import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzgeyjwmg.css';
import '../../css/r/r0i2nmbpf.css';
import '../../css/r/rdv65ibcl.css';
import '../../css/a/ajlu13b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzgeyjwmg wm-k"/><path class="r0i2nmbpf wm-k"/><path class="rdv65ibcl wm-k"/><path class="ajlu13b3x wm-a"/>`,
		"fallback": "withicons-bauhaus:layout-template",
	});
}

export default Component;
