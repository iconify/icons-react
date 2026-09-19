import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gblmqib0s.css';
import '../../css/b/bzz90_zzg.css';
import '../../css/v/v9mei8nfi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 gblmqib0s"/><path class="bzz90_zzg clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 v9mei8nfi"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:network-globe-solid",
	});
}

export default Component;
