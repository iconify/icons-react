import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ux3vkrb2f.css';
import '../../css/z/zs3kp5bcb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlE2NyucQ"><g class="wwvp95byt"><path clip-rule="evenodd" class="ux3vkrb2f"/><path class="zs3kp5bcb"/></g></mask></defs><path mask="url(#SVGlE2NyucQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:water-rate-two",
	});
}

export default Component;
