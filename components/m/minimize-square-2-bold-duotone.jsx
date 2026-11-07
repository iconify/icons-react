import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/g/g_663sbec.css';
import '../../css/s/sgottpb5m.css';
import '../../css/b/b4req-b9i.css';
import '../../css/p/pwjtuabvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="g_663sbec"/><path class="sgottpb5m"/><path class="b4req-b9i"/><path class="pwjtuabvp"/>`,
		"fallback": "solar:minimize-square-2-bold-duotone",
	});
}

export default Component;
