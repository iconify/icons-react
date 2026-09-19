import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vcum2uxal.css';
import '../../css/t/t8ik6obat.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3lzW5d7M"><g class="ufeehvblu"><rect class="vcum2uxal"/><path class="t8ik6obat"/></g></mask></defs><path mask="url(#SVG3lzW5d7M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:play-two",
	});
}

export default Component;
