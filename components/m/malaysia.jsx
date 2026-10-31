import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/d/d_t5xd_me.css';
import '../../css/a/ak_ef83sg.css';
import '../../css/o/oyqncfs_p.css';
import '../../css/x/xjf6l1b6c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="d_t5xd_me"/><path class="ak_ef83sg"/><path class="oyqncfs_p"/><path class="xjf6l1b6c"/>`,
		"fallback": "tabler-flags:malaysia",
	});
}

export default Component;
