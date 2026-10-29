import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awe8fabgt.css';
import '../../css/m/mi93fcc0q.css';
import '../../css/g/gdfhgsb7u.css';
import '../../css/b/bzd90obfh.css';
import '../../css/w/wvoup050v.css';
import '../../css/x/xghtqy_sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awe8fabgt wm-k"/><path class="mi93fcc0q wm-a"/><path class="gdfhgsb7u wm-a"/><path class="bzd90obfh wm-a"/><path class="wm-s wvoup050v"/><path class="wm-s xghtqy_sr"/>`,
		"fallback": "withicons-bauhaus:party-popper",
	});
}

export default Component;
