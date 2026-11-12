import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spspyv84e.css';
import '../../css/s/skbabg_mz.css';
import '../../css/v/vb63gv-2l.css';
import '../../css/v/vkax1lnah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spspyv84e"/><path class="skbabg_mz"/><path class="vb63gv-2l"/><path class="vkax1lnah"/>`,
		"fallback": "selfhst:microsoft-onenote-light",
	});
}

export default Component;
