import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pu12m-vkb {
  fill: currentColor;
  d: path("M1.146 1.147a.5.5 0 0 1 .708 0l13 13a.5.5 0 0 1-.707.707L11.293 12H3.749a2 2 0 0 1-1.944-1.53l-.725-3A2 2 0 0 1 3.024 5h1.269L1.146 1.854a.5.5 0 0 1 0-.707M12.994 5a2 2 0 0 1 1.944 2.47l-.726 3a2 2 0 0 1-.607 1.014l-.709-.709a1 1 0 0 0 .343-.54l.727-3A1 1 0 0 0 12.994 6H8.121l-1-1zm-9.97 1a1 1 0 0 0-.971 1.234l.724 3A1 1 0 0 0 3.75 11h6.544l-3.06-3.06a.494.494 0 0 1-.731-.44q.002-.127.059-.232L5.293 6zm2.978 3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-3-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m6 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}
</style><path class="pu12m-vkb"/>`,
		"fallback": "fluent:serial-port-off-16-regular",
	});
}

export default Component;
