import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k75pbxo-h.css';
import '../../css/o/owfk9nbdh.css';
import '../../css/i/iqy1ivbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k75pbxo-h wm-k"/><path class="owfk9nbdh wm-a"/><path class="iqy1ivbzl wm-a"/>`,
		"fallback": "withicons-bauhaus:percent",
	});
}

export default Component;
