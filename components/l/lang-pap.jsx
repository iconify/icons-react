import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rtc-krb_h.css';
import '../../css/v/vk7dmbbsu.css';
import '../../css/w/wwt414u4a.css';
import '../../css/g/g209tp_em.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="rtc-krb_h"/><path class="vk7dmbbsu"/><path class="wwt414u4a"/><path class="g209tp_em"/></g>`,
		"fallback": "circle-flags:lang-pap",
	});
}

export default Component;
